import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const EditRecipe = () => {
  const recipe = useLoaderData();

  console.log(recipe);

  const [title, setTitle] = useState(recipe.title);
  const [author, setAuthor] = useState(recipe.author);
  const [category, setCategory] = useState(recipe.category);
  const [ratings, setRatings] = useState(recipe.ratings);
  // const [id, setId] = useState(recipe.id);
  const [details, setDetails] = useState(recipe.details);
  const [image, setImage] = useState(recipe.image);

  const handleUpdate = async (e) => {
    const token = localStorage.getItem("token");
    const form = e.target;
    const title = form.title.value;
    const ratings = form.ratings.value;
    const author = form.author.value;
    const category = form.category.value;
    const details = form.details.value;
    const image = form.image.value;
    // const id = form.id.value;
    const data = { title, ratings, category, details, image, author };

    await fetch(`https://plate-pal-server.onrender.com/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    toast.warning("Successfully Updated The Recipe", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    });
  };

  return (
    <section className="bg-slate-200 ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Update This Recipe
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Recipe Name
              </label>
              <input
                type="text"
                name="reipename"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Image Url
              </label>
              <input
                type="text"
                name="image"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Image Url"
                required
              />
            </div>
            {/* <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Id
              </label>
              <input
                type="number"
                name="id"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
            </div> */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="category"
              >
                <option value="pizza">Pizza</option>
                <option value="chocolate">Chocolate</option>
                <option value="cheese">cheese</option>
                <option value="cake">Cake</option>
                <option value="burger">Burger</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Ratings
              </label>
              <select
                id="ratings"
                name="ratings"
                value={ratings}
                onChange={(e) => setRatings(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {/* <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="12"
                  required
                />
              </div> */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                details
              </label>
              <textarea
                id="details"
                rows="8"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your details here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditRecipe;
