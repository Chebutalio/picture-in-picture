const videoElement = document.querySelector('.video');
const button = document.querySelector('.button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.error('whoops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();

    button.disabled = false;
});

selectMediaStream();
