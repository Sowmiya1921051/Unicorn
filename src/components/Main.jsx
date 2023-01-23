import '../components/Main.css'
import React from 'react'
import data from './data'
function Main()
{
  const changeImage = () =>{
    let img='https://img.freepik.com/free-vector/cartoon-character-unicorn-standing-rainbow-with-unicorn-font_1308-55322.jpg?size=626&ext=jpg&ga=GA1.2.897102225.1661579479'
    console.log(img)
  }
  return(
    <div>
     <div>
      {data.map((n,i) => {
        return(
          <div>
            {n.id}
            <img id='image' src={n.image_url} height={n.height} alt="Oops" onClick={changeImage}  />
          </div>
          
        )
      })}

    </div> 
      
    </div>
  )
}
export default Main
