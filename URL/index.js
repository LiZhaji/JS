//  URL对象 静态方法createObjectUrl()/revokeObjectUrl()

const filebox = document.querySelector("#file")

filebox.addEventListener("change", e => {
	const file = e.target.files[0]
  const type = file.type
  const url = window.URL.createObjectURL(file)
  
 	const typebox = type.includes('image/') ? 'img' : type.includes('video/') ? 'video' : ''
  const box = document.createElement(typebox)
  box.width = 200
  box.controls = true
  box.src = url
  
  box.onload = () => window.URL.revokeObjectURL(url); // 加载完后释放
  
  document.body.appendChild(box);
}) 
