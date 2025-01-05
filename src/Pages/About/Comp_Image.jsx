import me from "../../Assets/pictures/PAS_PHOTO_3X4.png";
const Comp_Image = () => {
  return (
    <div
      id="image-self-container"
      className="w-40 bg-gray-500 h-52 -rotate-12 max-sm:mx-auto"
    >
      <div
        id="image-self"
        className="w-full h-full relative bg-black rotate-12"
      >
        <img src={me} alt="me_border_green" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Comp_Image;
