const Button = (props) => {
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  <div>
    <div className="bg-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-button" text="Like" />
        <Button className="comment-button" text="Comment" />
        <Button className="share-button" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
