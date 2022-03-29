import "../css/Input.css";

const Input = ({ setImagePath }) => {
  const handleChange = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="formContainer">
      <form
        onSubmit={() => {
          console.log("fklgn");
        }}
      >
        <label for="image">Choisissez une image : </label>
        <input
          type="file"
          onChange={handleChange}
          name="image"
          accept="image/png, image/jpeg"
        />
      </form>
    </div>
  );
};

export default Input;
