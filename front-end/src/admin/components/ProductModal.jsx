import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "../../context/AppContext";
import Button from "@mui/material/Button";
import { IoMdAddCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

function ProductModal({
  setModalOpel,
  modalOpen,
  setEditProductData,
  editProductData,
  editMode,
  setEditMode
}) {
  const { products, addProductHandler, updateProductHandler } =
    useGlobalContext();
  const { products: productsList } = products;
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [keyword, setkeyword] = useState("");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    setId(editMode ? editProductData._id : "");
    setTitle(editMode ? editProductData.title : "");
    setPrice(editMode ? editProductData.price : "");
    setDescription(editMode ? editProductData.description : "");
    setCategory(editMode ? editProductData.category : "");
    setKeywords(editMode ? editProductData.keywords : []);
  }, []);

  function ObjectId() {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const suffix = "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16))
      .toLowerCase();
    return `${timestamp}${suffix}`;
  }
  const addNewProductHandler = () => {
    // setId("");
    // setTitle("");
    // setPrice("");
    // setDescription("");
    // setDescription("");
    // setCategory("");
    // setKeywords([]);
    let id = ObjectId();
    addProductHandler({
      _id: id,
      title,
      price,
      description,
      category,
      image,
      keywords,
    });
    setModalOpel((prevState) => !prevState);
  };

  const editProductHandler = () => {
    updateProductHandler(editProductData._id, {
      _id: id,
      title,
      price,
      description,
      category,
      image,
      keywords,
    });
    setModalOpel((prevState) => !prevState);
  };

  const addKeyword = (e) => {
    if (keyword.length > 0) {
      setKeywords((prevState) => {
        return [...prevState, keyword];
      });
      setkeyword("");
    }
  };
  const deleteKeyword = (item) => {
    console.log(item);
    setKeywords((prevstate) => {
      let newKeywords = prevstate.filter((i) => i != item);
      return newKeywords;
    });
  };

  return (
    <div className="admin-modal">
      <AiOutlineCloseCircle
        className="modal-close"
        onClick={() => {
          setModalOpel(false)
          setEditMode(false)
        }}
      />
      <div className="product-form-wrapper">
        <form className="product-form">
          <div className="title">
            <label className="product-label">Title:</label>
            <input
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="price">
            <label className="product-label">Price:</label>
            <input
              type="number"
              name="price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="category">
            <label className="product-label">Category:</label>
            <input
              type="text"
              name="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="images">
            <label htmlFor="files" className="product-label">
              Select Photos:
            </label>
            <input
              type="file"
              id="files"
              name="photos"
              required
              multiple
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="description">
            <label className="product-label">Description:</label>
            <textarea
              type="text"
              name="description"
              required
              resize="none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="keywords">
            <label className="product-label">Related Products:</label>
            <input
              type="text"
              name="keywords"
              required
              value={keyword}
              onChange={(e) => setkeyword(e.target.value)}
            />
            <IoMdAddCircle className="add-keyword" onClick={addKeyword} />
          </div>
          <div className="keywords-list hide-scrollbar">
            {keywords?.map((item, index) => {
              return (
                <div className="keyword-item" key={index}>
                  <li>{item}</li>
                  <TiDelete
                    className="delete-keyword"
                    onClick={() => deleteKeyword(item)}
                  />
                </div>
              );
            })}
          </div>
          <Button
            variant="contained"
            disableElevation
            onClick={editMode ? editProductHandler : addNewProductHandler}
            style={{ margin: "30px 0", backgroundColor: "rgb(10, 152, 120)" }}
          >
            {editMode ? "Update" : "Add Product"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
