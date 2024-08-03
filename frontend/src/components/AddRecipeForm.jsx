// src/AddRecipeForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        menuId: '',
        name: '',
        thumbnail_image: '',
        description: '',
        category: '',
        instructions: '',
        tags: '',
        ingredients: [{ name: '', quantity: '' }],
        comments: [{ user: '', comment: '' }],
        more: { prep_time: '', cook_time: '', servings: '', difficulty: '', source: '' },
    });

    useEffect(() => {
        const fetchMaxMenuId = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/all-items');
                const items = response.data;
                const maxMenuId = items.reduce((max, item) => Math.max(max, item.menuId), 0);
                setFormData((prevData) => ({
                    ...prevData,
                    menuId: maxMenuId + 1,
                }));
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMaxMenuId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleIngredientChange = (index, e) => {
        const { name, value } = e.target;
        const ingredients = [...formData.ingredients];
        ingredients[index][name] = value;
        setFormData({ ...formData, ingredients });
    };

    const handleCommentChange = (index, e) => {
        const { name, value } = e.target;
        const comments = [...formData.comments];
        comments[index][name] = value;
        setFormData({ ...formData, comments });
    };

    const handleMoreChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, more: { ...formData.more, [name]: value } });
    };

    const addIngredient = () => {
        setFormData({
            ...formData,
            ingredients: [...formData.ingredients, { name: '', quantity: '' }],
        });
    };

    const addComment = () => {
        setFormData({
            ...formData,
            comments: [...formData.comments, { user: '', comment: '' }],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()),
        };

        try {
            const response = await axios.post('http://localhost:5000/api/items/addnew', dataToSend);
            alert('Recipe added successfully');
            setFormData({
                name: '',
                thumbnail_image: '',
                description: '',
                category: '',
                instructions: '',
                tags: '',
                ingredients: [{ name: '', quantity: '' }],
                comments: [{ user: '', comment: '' }],
                more: { prep_time: '', cook_time: '', servings: '', difficulty: '', source: '' }
            });
        } catch (error) {
            console.error('Error adding recipe:', error);
            alert('Failed to add recipe');
        }
    };

    return (
        <div className='max-w-full min-h-screen bg-black mt-20 md:px-16 px-3 py-8'>
            <form onSubmit={handleSubmit} className="max-w-full mx-auto md:p-6 p-4 bg-gray-200 shadow-md rounded pt-8">
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Menu ID:</label>
                        <input
                            type="number"
                            name="menuId"
                            value={formData.menuId}
                            onChange={handleChange}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Thumbnail Image URL:</label>
                        <input
                            type="text"
                            name="thumbnail_image"
                            value={formData.thumbnail_image}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Category:</label>
                        <select
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="">Select Category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Sides">Sides</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                        rows={4}
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Instructions:</label>
                    <textarea
                        rows={4}
                        type="text"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Tags (comma separated):</label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Ingredients:</label>
                    {formData.ingredients.map((ingredient, index) => (
                        <div key={index} className="mb-2 flex md:flex-row flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={ingredient.name}
                                onChange={(e) => handleIngredientChange(index, e)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Quantity"
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChange(index, e)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    ))}
                    <div className='flex justify-end'>
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow-md"
                        >
                            Add More Ingredients
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Comments:</label>
                    {formData.comments.map((comment, index) => (
                        <div key={index} className="mb-2 flex md:flex-row flex-col gap-4">
                            <input
                                type="text"
                                name="user"
                                placeholder="User"
                                value={comment.user}
                                onChange={(e) => handleCommentChange(index, e)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <input
                                type="text"
                                name="comment"
                                placeholder="Comment"
                                value={comment.comment}
                                onChange={(e) => handleCommentChange(index, e)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    ))}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={addComment}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-400 transform duration-300"
                        >
                            Add More Comments
                        </button>
                    </div>
                </div>
                <div className='flex md:flex-row gap-4 flex-col'>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Prep Time:</label>
                        <input
                            type="text"
                            name="prep_time"
                            value={formData.more.prep_time}
                            onChange={handleMoreChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Cook Time:</label>
                        <input
                            type="text"
                            name="cook_time"
                            value={formData.more.cook_time}
                            onChange={handleMoreChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                </div>
                <div className='flex md:flex-row gap-4 flex-col'>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Servings:</label>
                        <input
                            type="text"
                            name="servings"
                            value={formData.more.servings}
                            onChange={handleMoreChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-gray-700">Difficulty:</label>
                        <select
                            type="text"
                            name="difficulty"
                            value={formData.more.difficulty}
                            onChange={handleMoreChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="">Select Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Source:</label>
                    <input
                        type="text"
                        name="source"
                        value={formData.more.source}
                        onChange={handleMoreChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded shadow w-full hover:bg-green-600 transform duration-300"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;

