//DAY10 - 運算子與條件判斷
//成績判定系統
//找到DOM元素
const scoreInput=document.getElementById("scoreInput");//分數輸入框
const checkBtn=document.getElementById("checkBtn");//顯示按鈕
const resultText=document.getElementById("resultText");//顯示結果的段落

//加入事件監聽：當按鈕被點擊時執行
checkBtn.addEventListener("click",function()
{
  const score=Number(scoreInput.value);//取得輸入值，轉成數字
  
  //檢查是否為有效數字
  if(isNaN(score)||score<0)
  {
    resultText.textContent="請輸入有效的分數!";
    return;
  }
  
  //判斷成績範圍並顯示結果
  if(score>=90)
  {
    resultText.textContent="評語：優等!!";
  }
  else if(score>=60)
  {
    resultText.textContent="評語：及格，要再加油~";
  }
  else
  {
    resultText.textContent="評語：不及格。";
  }
});
//--------------------------------------------------------------------
//DAY11 - 迴圈與陣列
//建立一個購物清單的陣列
let items=["牛奶","雞蛋","麵包","泡麵","水果"];

//找到按鈕與清單元素
const showListBtn=document.getElementById("showListBtn");
const shoppingList=document.getElementById("shoppingList");

//加入按鈕事件
showListBtn.addEventListener("click",function()
{
    //清空原本的內容(避免重複)
    shoppingList.innerHTML="";

    //用for迴圈把每一項都加到清單裡
    for(let i=0;i<items.length;i++)
    {
        let li=document.createElement("li");//建立<li>
        li.textContent=items[i];//加入文字
        shoppingList.appendChild(li);
    }
});
//--------------------------------------------------------------------
//DAY12 - 函式與參數
//BMI計算系統
const heightInput=document.getElementById("heightInput");
const weightInput=document.getElementById("weightInput");
const calcBtn=document.getElementById("calcBtn");
const bmiResult=document.getElementById("bmiResult");

function calculateBMI(height,weight)
{
  let h=height/100;
  let bmi=weight/(h*h);
  return bmi.toFixed(2);
}

calcBtn.addEventListener("click",function()
{
  const height=Number(heightInput.value);
  const weight=Number(weightInput.value);
  
  if(isNaN(height)||isNaN(weight)||height<=0||weight<=0)
  {
    bmiResult.textContent="請輸入有效身高體重!";
  }
  const result=calculateBMI(height,weight);
  bmiResult.textContent=`您的BMI為：${result}`;
});
//--------------------------------------------------------------------
//DAY13 - 物件與屬性
//定義一個物件person
//const person={name:"Zoe",age:22,isStudent:true};
const person={name:"Zoe",age:22,contact:{email:"zoe@gmail.com",phone:"0912345678"},hobbies:["跳舞","唱歌","寫程式"]};
///person["name"]="Bruce";//修改原本的名字
//person.age=100;//修改原本的年齡
//person.hobby="跳舞";//新增hobby屬性
//person["city"]="台北";//新增city屬性
//delete person.isStudent;//移除isStudent


//建立函式：顯示人物資料
function showBtn()
{
  //const text=`名字：${person.name}，年齡：${person.age}，學生身分：${person.isStudent?"是":"否"}`;
  //document.getElementById("info").textContent=text;
  
  let text=`姓名:${person.name}，年齡：${person.age}`;
  text+=`<br>📧信箱：${person.contact.email}`;
  text+=`<br>📞電話：${person.contact.phone}`;
  text+=`<br>🎯興趣：${person.hobbies.join("/")}`;
  document.getElementById("info").innerHTML=text;
}
//--------------------------------------------------------------------
//DAY14 - DOM操作
//原本的person資料
// const person={name:"Zoe",age:22,contact:{email:"zoe@gmail.com",phone:"0912345678"},hobbies:["跳舞","唱歌","寫程式"]};

//元素選取
const hobbyInput=document.getElementById("hobbyInput");
const addHobbyBtn=document.getElementById("addHobbyBtn");
const hobbyList=document.getElementById("hobbyList");

//先將原本興趣顯示在畫面上
function renderHobbyList()
{
  hobbyList.innerHTML="";//先填空
  person.hobbies.forEach(hobby=>
  {
    const li=document.createElement("li");
    li.innerText=hobby;
    hobbyList.appendChild(li);
  });
}
renderHobbyList();

//加入事件監聽：新增興趣
addHobbyBtn.addEventListener("click",()=>
{
  const newHobby=hobbyInput.value.trim();
  if(newHobby)
  {
    person.hobbies.push(newHobby);
    renderHobbyList();//更新畫面
    hobbyInput.value="";//清空輸入欄
  }
  else
  {
    alert("請輸入一個興趣");
  }
});
//--------------------------------------------------------------------
//DAY15 - 事件監聽與互動
const interestInput=document.getElementById("interestInput");
const addInterestBtn=document.getElementById("addInterestBtn");
const interestList=document.getElementById("interestList");

//新增興趣函式
function addInterest()
{
  const interest=interestInput.value.trim();
  
  //檢查是否為空值
  if(interest==="")
  {
    alert("請輸入興趣!");
    return;
  }
  
  //建立新的<li>
  const li=document.createElement("li");
  li.innerHTML=`${interest}<button class="deleteBtn">X</button>`;
  
  //將li加入到ul中
  interestList.appendChild(li);
  
  //清空輸入框
  interestInput.value="";
  
  //加入刪除按鈕事件
  const deleteBtn=li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click",function()
  {
    li.remove();//刪除自己
  });
}

//點擊「新增」按鈕
addInterestBtn.addEventListener("click",addInterest);

//按下Enter也可新增
interestInput.addEventListener("keydown",function(e)
{
  if(e.key==="Enter")
  {
    addInterest();
  }
});
//--------------------------------------------------------------------
//DAY16 - 表單驗證與錯誤提示
//取得表單與欄位
const registerForm=document.getElementById("registerForm");
const nameInput=document.getElementById("nameInput");
const emailInput=document.getElementById("emailInput");
const passwordInput=document.getElementById("passwordInput");

const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");
const formSuccess=document.getElementById("formSuccess");

//當使用者輸入時清除錯誤訊息
nameInput.addEventListener("input",()=>
{
  if(nameInput.value.trim()==="")
  {
    nameError.textContent="姓名不能為空";
  }
  else
  {
    nameError.textContent="";
  }
});

emailInput.addEventListener("input",()=>
{
  if(!emailInput.validity.valid)
  {
    emailError.textContent="請輸入有效的Email";
  }
  else
  {
    emailError.textContent="";
  }
});

passwordInput.addEventListener("input",()=>
{
  if(passwordInput.value.length<6)
  {
    passwordError.textContent="密碼至少要6個字元";
  }
  else
  {
    passwordError.textContent="";
  }
});

//送出表單時阻止錯誤提交
formSuccess.addEventListener("submit",function(e)
{
  e.preventDefault();//阻止預設送出行為
  let isValid=true;

  if(nameInput.value.trim()==="")
  {
    nameError.textContent="姓名不能為空";
    isValid=false;
  }

  if(!emailInput.validity.valid)
  {
    emailError.textContent="請輸入有效的Email";
    isValid=false;
  }

  if(passwordInput.value.length<6)
  {
    passwordError.textContent="密碼至少要6個字元";
    isValid=false;
  }

  if(isValid)
  {
    formSuccess.textContent="✅ 註冊成功！";
    //這裡可以加：送資料伺服器、清空表單等
  }
});
//--------------------------------------------------------------------
//DAY17 - JSON與物件轉換
//取得DOM元素(使用者輸入欄位+按鈕+顯示區域)
const jsonName=document.getElementById("jsonName");//姓名欄位
const jsonAge=document.getElementById("jsonAge");//年齡欄位
const jsonBtn=document.getElementById("jsonBtn");//組合按鈕
const jsonOutput=document.getElementById("jsonOutput");//顯示區域

//加入點擊事件，當按下「組合JSON資料」按鈕時執行
jsonBtn.addEventListener("click",function()
{
  //從輸入欄位取得使用者填寫的值
  const name=jsonName.value;//取得姓名
  const age=Number(jsonAge.value);//取得年齡(轉為數字)

  //簡單驗證輸入
  if(name.trim()===""||isNaN(age))
  {
    jsonOutput.textContent="請輸入有效的姓名和年齡";
    return;
  }

  //組成一個物件(這是JavaScript的物件格式)
  const userData={name:name,age:age};

  //使用JSON.stringify將物件轉為JSON格式(字串)
  const jsonString=JSON.stringify(userData,null,2);//null,2代表格式縮排

  //顯示結果在<pre>標籤中(會保留排版)
  jsonOutput.textContent=jsonString;
});

//儲存到localStroage的按鈕
const saveBtn=document.getElementById("saveBtn");
//模擬送出到後端的按鈕
const sendBtn=document.getElementById("sendBtn");

//儲存資料到localStroage
saveBtn.addEventListener("click",function()
{
  const name=jsonName.value;
  const age=Number(jsonAge.value);
  
  if(name.trim()===""||isNaN(age))
  {
    alert("請輸入有效的姓名和年齡");
    return;
  }
  
  const userData={name,age};
  localStorage.setItem("userData",JSON.stringify(userData));
  alert("✅資料已處存到localStorage!");
});

//畫面載入時，如果localStorage裡有資料就自動顯示
window.addEventListener("DOMContentLoaded",function()
{
  const savedData=localStorage.getItem("userData");
  
  if(savedData)
  {
    const obj=JSON.parse(savedData);
    const jsonString=JSON.stringify(obj,null,2);//格式化輸出
    jsonOutput.textContent=jsonString;
  }
});

//模擬送出道後端(以console.log示意)
sendBtn.addEventListener("click",function()
{
  const name=jsonName.value;
  const age=Number(jsonAge.value);
  
  if(name.trim()===""||isNaN(age))
  {
    alert("請輸入有效的姓名與年齡");
    return;
  }
  
  const userData={name,age};
  const jsonData=JSON.stringify(userData);
  console.log("📤模擬送出到後端：",jsonData);
  alert("✅模擬送出完成!!(實際專案中會送給後端API)");
});

//清除資料按鈕功能
const clearJsonBtn=document.getElementById("clearJsonBtn");

clearJsonBtn.addEventListener("click",function()
{
  localStorage.removeItem("userData");
  jsonOutput.textContent="已清除資料";
});

//複製JSON按鈕功能
const copyJsonBtn=document.getElementById("copyJsonBtn");

copyJsonBtn.addEventListener("click",function()
{
  const text=jsonOutput.textContent;
  if(text.trim()!=="")
  {
    navigator.clipboard.writeText(text)
      .then(()=>alert("已複製JSON到剪貼簿"))
      .catch(()=>alert("複製失敗"))
  }
});
//--------------------------------------------------------------------
//DAY18- 瀏覽器API:LocalStorage
//取得元素
const todoInput=document.getElementById("todoInput");
const addTodoBtn=document.getElementById("addTodoBtn");
const todoList=document.getElementById("todoList");

//儲存任務陣列(初始化)
let todos=JSON.parse(localStorage.getItem("todos"))||[];

//顯示目前任務
function renderTodos()
{
  todoList.innerHTML="";//清空
  
  todos.forEach((todo,index)=>
  {
    const li=document.createElement("li");
    li.textContent=todo;
    
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="刪除";
    deleteBtn.addEventListener("click",function()
    {
      todos.splice(index,1);//移除陣列的一筆
      updateTodos();//重新更新
    });
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

//更新localStorage並重新渲染畫面
function updateTodos()
{
  localStorage.setItem("todos",JSON.stringify(todos));
  renderTodos();
}

//加入任務按鈕點擊事件
addTodoBtn.addEventListener("click",function()
{
  const newTodo=todoInput.value.trim();
  if(newTodo!=="")
  {
    todos.push(newTodo);//加到陣列
    updateTodos();//儲存+畫面更新
    todoInput.value="";//清空欄位
  }
});

renderTodos();
//--------------------------------------------------------------------
//DAY19- 非同步概念：Callback,Promise,Asyn/Await
const callbackBtn=document.getElementById("callbackBtn");
const promiseBtn=document.getElementById("promiseBtn");
const asynBtn=document.getElementById("asynBtn");
const day19Result=document.getElementById("day19Result");

//Callback
//模擬非同步資料(例如：模擬從後端抓資料)
function fakeFetch(callback)
{
  setTimeout(()=>
  {
    callback("Callback：資料已取得!");
  },2000);
}

//Promise
function fakeFetchPromise()
{
  return new Promise((resolve,reject)=>
  {
    setTimeout(()=>
    {
      resolve("Promise：資料已取得!");
    },2000);
  });
}

//Asyn/Await
async function fakeFetchAsync()
{
  try
  {
    day19Result.textContent="等待中...";
    
    //等待fakeFetchPromise結果
    const result=await fakeFetchPromise();
    day19Result.textContent="Async/Await："+result;
  }
  catch(error)
  {
    day19Result.textContent="錯誤："+error;
  }
}

//事件觸發區域
callbackBtn.addEventListener("click",()=>
{
  day19Result.textContent="等待中...";
  // fakeFetch((data)=>
  // {
  //   day19Result.textContent=data;
  // });
  fakeFetch(function(data)
  {
    day19Result.textContent=data;
    //console.log(data);
  });
});

promiseBtn.addEventListener("click",()=>
{
  day19Result.textContent="等待中...";
  fakeFetchPromise()
    .then((data)=>
    {
      day19Result.textContent=data;
    })
    .catch((err)=>
    {
      day19Result.textContent="錯誤："+err;
    });
});

asynBtn.addEventListener("click",()=>
{
  fakeFetchAsync();
});
//--------------------------------------------------------------------
//DAY20 - Fetch API資料取得

//取得按紐與顯示區塊DOM
const fetchBtn=document.getElementById("fetchBtn");
const apiOutput=document.getElementById("apiOutput");

//當按鈕被點擊時，發送請求到API
fetchBtn.addEventListener("click",()=>
{
  //顯示loading訊息
  apiOutput.textContent="載入中...";
  
  //使用Fetch取得資料(這裡用隨機使用者API)
  fetch("https://randomuser.me/api/")
    .then(response=>
    {
      //檢查回傳是否成功
      if(!response.ok)
      {
        throw new Error("網路錯誤，無法取得資料");
      }
      return response.json();//將回應轉成JSON
    })
    .then(data=>
    {
      //取得使用者資訊
      const user=data.results[0];
      const name=`${user.name.title} ${user.name.first} ${user.name.last}`;
      const email=user.email;
      const country=user.location.country;
    
      //顯示資料
      apiOutput.innerHTML=
        `<p>姓名：${name}</p>
         <p>Email：${email}</p>
         <p>國家：${country}</p>`;
    })
    .catch(error=>
    {
      //處理錯誤狀況
      apiOutput.textContent="錯誤："+error.message;
    });
});