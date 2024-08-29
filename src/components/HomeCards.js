
const HomeCards = ({ title, description, onClick, className }) => {

  return (
    <div className={className} onClick={onClick}>
      <div className="tab-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HomeCards