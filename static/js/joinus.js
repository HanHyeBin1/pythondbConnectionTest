function joinupCheck() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("passwd").value;
    let passwordCheck = document.getElementById("passwdCheck").value;
    let check = true;
    
    // 이메일 확인
    if (email.includes('@')) {
        let emailId = email.split('@')[0];
        let emailServer = email.split('@')[1];
        if (emailId === "" || emailServer === "") {
            document.getElementById("emailError").innerHTML = "이메일이 올바르지 않습니다.";
            check = false;
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
    } else {
        document.getElementById("emailError").innerHTML = "이메일이 올바르지 않습니다.";
        check = false;
    }

    // 이름 확인
    if (name === "") {
        document.getElementById("nameError").innerHTML = "이름이 올바르지 않습니다.";
        check = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // 비밀번호 확인
    if (password !== passwordCheck) {
        document.getElementById("passwdError").innerHTML = "";
        document.getElementById("passwdCheckError").innerHTML = "비밀번호가 동일하지 않습니다.";
        check = false;
    } else {
        document.getElementById("passwdError").innerHTML = "";
        document.getElementById("passwdCheckError").innerHTML = "";
    }

    if (password === "") {
        document.getElementById("passwdError").innerHTML = "비밀번호를 입력해주세요.";
        check = false;
    } else {
        document.getElementById("passwdError").innerHTML = "";
    }

    // 가입 완료 체크 및 가입 완료 처리
    if (check) {
        // 가입 완료 처리 코드를 작성하세요.
        // 예를 들어, 회원가입 폼을 서버로 전송하여 처리하는 방법 등을 사용할 수 있습니다.
        // 처리 후에 필요한 동작을 수행하도록 코드를 추가하세요.
        // form 태그를 찾아 submit() 메서드 호출
        document.getElementById("joinForm").submit();
    }
}
