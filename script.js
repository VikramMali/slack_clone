
                   
const fileInput = document.getElementById("fileToUpload");

const uploadButton = document.querySelector("[name='submit']");

const profileImage = document.querySelector(".image-upload img");

uploadButton.addEventListener("click", (event) => {
    event.preventDefault();

    fileInput.click();
});
fileInput.addEventListener("change", () => {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = (event) => {
            profileImage.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    }
});


