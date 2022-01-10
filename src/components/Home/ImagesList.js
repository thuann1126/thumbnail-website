import React from "react";
import "./ImagesList.css";
import BookButton from "../BookButton";


function showimage() {

/*how to get the images from firebase storage
step one: list all the file name using listAll()
step 2; use useParam() to hold the path
step 3: pass the path to the url and display it in the img src
*/

  // var storageRef = firebase.storage().ref();
  // var spaceRef = storageRef.child('Services/Pedicures');
  // spaceRef.listAll()
  // .then((res) => {
  //   res.prefixes.forEach((folderRef) => {
  //     console.log(folderRef.name);
  //   });
  //   res.items.forEach((itemRef) => {
  //     console.log(itemRef.fullPath);
  //   });
  // }).catch((error) => {
  //   // Uh-oh, an error occurred!
  // });
  
// spaceRef.getDownloadURL().then((url) =>{
//   var test = url;  
//   document.getElementById('image').src = test;
//   console.log(test);  
// })

}
showimage();


const imagesList = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJ3SB8nYsj1wGXP47CH9Tl7goILovDmw6A&usqp=CAU",
  },
  {
    image: "https://www.cimtcollege.com/cimt/images/nail-art-workshop.jpg",
  },
  {
    image:
      "https://heavy.com/wp-content/uploads/2019/02/nail-art-printer-1.jpg?quality=65&strip=all&w=780",
  },
];
const delay = 4000;

export default function ImagesList() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>    
      <div>
        <div className="slideshowTitle">OUR BEST FEATURES</div>
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {imagesList.map((item, index) => {
              return <img src={item.image} className="slide" key={index}></img>;
            })}
          </div>

          <div className="slideshowDots">
            {imagesList.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <BookButton></BookButton>
    </>
  );
}
