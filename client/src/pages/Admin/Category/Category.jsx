import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import CategoryForm from "../CategoryForm/CategoryForm";
import style from "./Category.module.css";
import { Navigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import { ToastContainer, toast } from "react-toastify";


const Category = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // console.log(name);
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://156.67.221.116:8000/api/v1/category/create-category",
        {
          name,
        }
      );
      if (data?.success) {
        // Update the state with the new category before navigating or showing a toast
        setCategories([...categories, data.category]);
        toast.success("Category created successfully");
        Navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://156.67.221.116:8000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://156.67.221.116:8000/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://156.67.221.116:8000/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1>Manage Category</h1>
          <div className="p-3 w-50">
            <h3>Create Category</h3>
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>
          <div className={style.tableBody}>
            <h3>Category Lists</h3>
            <table className={style.table}>
              <thead className={style.tableHead}>
                <tr>
                  <th scope="col" className={style.name}>
                    Name
                  </th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className={style.tBody}>
                {categories?.map((c) => (
                  <>
                    <tr>
                      <td key={c._id}>{c.name}</td>
                      <td className={style.manageButton}>
                        <button
                          className={style.buttonClass}
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className={style.buttonClass}
                          onClick={() => {
                            handleDelete(c._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
        <RightSide />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Category;
