import React from "react";
import style from "./CategoryForm.module.css"

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.categoryForm}>
        <div className={style.input_box}>
          <input
            type="text"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
