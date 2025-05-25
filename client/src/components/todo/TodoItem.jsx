// src/components/todo/TodoItem.js
import React, { useState } from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const { _id: id, title, description, completed } = todo;

  const handleHeaderClick = (e) => {
    // prevent accordion toggle when clicking checkbox or buttons
    const tag = e.target.tagName.toLowerCase();
    if (tag === "input" || tag === "svg" || tag === "button") return;
    if (!isEditing) setOpen(!open);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setOpen(true);
  };

  const handleSave = () => {
    onEdit(id, {
      title: editTitle,
      description: editDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(title);
    setEditDescription(description);
    setIsEditing(false);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-none">
      {/* Header */}
      <div
        className="flex items-center p-4 cursor-pointer select-none"
        onClick={handleHeaderClick}
      >
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="h-5 w-5 border border-gray-300 rounded-none focus:outline-none focus:border-orange-500"
        />

        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="ml-4 flex-1 p-1 border border-gray-300 rounded-none focus:outline-none focus:border-orange-500"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <h3
            className={`ml-4 flex-1 text-lg font-medium ${
              completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        )}

        {/* Edit/Save Icons */}
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-orange-600 text-white rounded-none hover:bg-orange-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 ml-2 border border-gray-300 text-gray-700 rounded-none hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-1 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <EditSharpIcon />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="p-1 ml-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <DeleteSharpIcon />
            </button>
          </>
        )}
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all transform duration-300 ease-in-out ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-gray-700 border-t border-gray-200">
          {isEditing ? (
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full p-2 mt-2 border border-gray-300 rounded-none focus:outline-none focus:border-orange-500"
              rows={3}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div className="mt-2">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
}
