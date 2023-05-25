const scan = document.querySelector('#btn')

scan.onclick = async()=>{
 
  const eyeDropper = new EyeDropper()

  const {sRGBHex} =  await eyeDropper.open()

  const result = document.getElementById('result')
  result.style.width = "50px"
  result.style.height = "50px"
  result.style.backgroundColor = sRGBHex

  result.innerHTML = sRGBHex ;
}

 

