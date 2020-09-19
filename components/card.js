const card = ({ title, color, children }) => {
  return (
    <div className={`rounded overflow-hidden shadow-lg mx-2 my-2 ${color}`}>
      <div className="px-4 py-2 text-center text-xl">
        <div className="font-bold mb-2">{title}</div>
        {children}
      </div>
    </div>
  )
}

export default card;