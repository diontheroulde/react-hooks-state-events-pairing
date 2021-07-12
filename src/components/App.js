import video  from "../data/video.js"


import TopSection from "./TopSection.js"
import ButtonContainer from "./ButtonContainer.js";
import CommentSection from "./CommentSection.js";




function App() {
  console.log("Here's your data:", video);
  
 
  

  return (
    <div className="App">
       <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
        />
    <TopSection 
      title={video.title}
      views={video.views}
      createdAt={video.createdAt}
      />
      <ButtonContainer
      upvotes = { video.upvotes } 
      downvotes = {video.downvotes} 
      />
      <CommentSection
        comments={video.comments}
      />
    </div>
     
     );
     
}

export default App;
