var itemList = []; //빈 배열 만들기

var addBtn = document.querySelector("#add"); //추가버튼 변수에 담기
addBtn.addEventListener("click", addList); //추가버튼 이벤트만들기

function addList(){
	var item = document.querySelector("#item").value; //input입력값을 변수item에 저장
	if(item != null){  //item이 공란이 아니면
		itemList.push(item); //itemList 맨 뒤에 item값 등록
		document.querySelector("#item").value = ""; //등록 후 input칸 자동으로 지움
		document.querySelector("#item").focus(); //커서 활성화
	}
	showList(); //showList 함수 실행
}

function showList(){ //itemList배열의 내용을 화면에 보여줄 showList함수만들기
	var list = "<ul>"; 
	for(var i=0; i<itemList.length; i++){
		list +="<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
	}
	list += "</ul>"

	document.querySelector('#itemList').innerHTML = list; //list 변수내용을 #itemList안에 표시

	var remove = document.querySelectorAll(".close"); //삭제버튼을 변수로 저장
	for(var i=0; i < remove.length; i++) { //반복문실행
		remove[i].addEventListener("click", removeList); //변수remove의 인덱스i번째 클릭시 removeList 함수 실행
	}
}

function removeList(){
	var id = this.getAttribute("id"); //this의 id 값을 변수 id에 저장
	itemList.splice(id, 1); //itemList의 변수id번째부터 1개 삭제
	showList(); //변경된 itemList 배열을 다시 화면에 표시
	
}

