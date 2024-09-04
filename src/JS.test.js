import { screen ,render ,fireEvent } from "@testing-library/react";
import { JSFunction } from "./JSFunction";
import { Comp } from "./Comp";
import App from "./App";


test("Check Multiply Functionality", ()=>{
   expect(JSFunction(2,3)).toBe(6)  
})


test('Check Component loading', () => {
    render(<Comp />);
    const linkElement = screen.getByText(/Hello React/);
    expect(linkElement).toBeInTheDocument();
  });

 
  test("SnapShot" ,()=>{
    const container =  render(<App/>)
    expect(container).toMatchSnapshot()

  })


  test("Check textbox rendering",()=>{
    var {container}= render(<Comp/>)
    var ele = container.querySelector("#txtName")
    expect(ele).toBeInTheDocument()

  })


  test("Text Box Working Fine",()=>{
    var {container} = render(<Comp/>)
           
    var ele =  container.querySelector('#txtName')
    fireEvent.change(ele,{
        target : {value:"a"}
    })
     expect(ele.value).toBe("a")
})


// test("Api testing",()=>{
//     var {container}= render(<Comp/>)
//     var ele = container.querySelector("li") 
//     ele.val
// })

// component rendring , functionality , snapshot testing . api testing