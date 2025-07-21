"use client";

import React, { useState } from "react";

type TopPickStringKeys = "name" | "title" | "newsletter_name" | "description" | "image_url" | "button_text";

export default function DiscoverAdminPage() {
  const [featured, setFeatured] = useState({
    title: "",
    author: "",
    description: "",
    subscribers: 0,
    image_url: "",
    button_text: "",
  });

  const [topPicks, setTopPicks] = useState([
    {
      name: "",
      title: "",
      newsletter_name: "",
      description: "",
      subscribers: 0,
      image_url: "",
      tags: [""],
      socials: {
        twitter: "",
        linkedin: "",
        website: "",
      },
      button_text: "",
    },
  ]);

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeatured({ ...featured, [name]: name === "subscribers" ? Number(value) : value });
  };

  const handleTopPickChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newTopPicks = [...topPicks];
    if (name === "subscribers") {
      newTopPicks[index][name] = Number(value);
    } else if (name.startsWith("socials.")) {
      const socialKey = name.split(".")[1] as keyof typeof newTopPicks[number]["socials"];
      newTopPicks[index].socials[socialKey] = value;
    } else if (name === "tags") {
      newTopPicks[index].tags = value.split(",").map((tag) => tag.trim());
    } else {
      newTopPicks[index][name as TopPickStringKeys] = value;
    }
    setTopPicks(newTopPicks);
  };

  const addTopPick = () => {
    setTopPicks([
      ...topPicks,
      {
        name: "",
        title: "",
        newsletter_name: "",
        description: "",
        subscribers: 0,
        image_url: "",
        tags: [""],
        socials: {
          twitter: "",
          linkedin: "",
          website: "",
        },
        button_text: "",
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      featured,
      top_picks: topPicks,
    };

    try {
      const res = await fetch("http://localhost:4444/admin/update/discover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Updated Firestore successfully!");
      } else {
        alert("Failed to update Firestore");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred");
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Update Discover Page</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Featured</h2>
          <input
            name="title"
            placeholder="Title"
            value={featured.title}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
          <input
            name="author"
            placeholder="Author"
            value={featured.author}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={featured.description}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
          <input
            name="subscribers"
            placeholder="Subscribers"
            type="number"
            value={featured.subscribers}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
          <input
            name="image_url"
            placeholder="Image URL"
            value={featured.image_url}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
          <input
            name="button_text"
            placeholder="Button Text"
            value={featured.button_text}
            onChange={handleFeaturedChange}
            className="block w-full mb-2 p-2 border"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Top Picks</h2>
          {topPicks.map((pick, index) => (
            <div key={index} className="border p-4 mb-4">
              <input
                name="name"
                placeholder="Name"
                value={pick.name}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="title"
                placeholder="Title"
                value={pick.title}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="newsletter_name"
                placeholder="Newsletter Name"
                value={pick.newsletter_name}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={pick.description}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="subscribers"
                placeholder="Subscribers"
                type="number"
                value={pick.subscribers}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="image_url"
                placeholder="Image URL"
                value={pick.image_url}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="tags"
                placeholder="Tags (comma separated)"
                value={pick.tags.join(", ")}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="socials.twitter"
                placeholder="Twitter"
                value={pick.socials.twitter}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="socials.linkedin"
                placeholder="LinkedIn"
                value={pick.socials.linkedin}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="socials.website"
                placeholder="Website"
                value={pick.socials.website}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
              <input
                name="button_text"
                placeholder="Button Text"
                value={pick.button_text}
                onChange={(e) => handleTopPickChange(index, e)}
                className="block w-full mb-2 p-2 border"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTopPick}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Add Top Pick
          </button>
        </section>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}