const Cache = require("@11ty/eleventy-cache-assets");
require("dotenv").config();

module.exports = async () => {
  try {
    const { results } = await Cache(
      "https://api.notion.com/v1/databases/6e2a35a17b5344aeb5db0fe47cc5764a/query",
      {
        duration: "1h", // 1 day
        type: "json",
        fetchOptions: {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
            "Notion-Version": "2021-05-13",
            "Content-Type": "application/json",
          },
        },
      }
    );

    let filteredArray = results.filter(
      (item) => !item.properties.hasOwnProperty("Archived")
    );

    const trimmedResults = filteredArray.map((result) => {
      const { properties } = result;
      const { Created_Time, Title, URL, Notes, Tags } = properties;

      return {
        created: Created_Time.created_time,
        notes: Notes.rich_text[0]?.text.content,
        tag: Tags.multi_select[0]?.name === "video" ? "Watched" : "Read",
        title: Title.title[0]?.plain_text,
        url: URL?.url,
      };
    });
    return trimmedResults;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};
