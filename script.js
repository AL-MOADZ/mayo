document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input values
    const roomId = document.getElementById('roomId').value;
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    
    // Generate prebuilt token
    const TOKEN = generatePrebuiltToken(2054736379, "4ea0ce885e4f8fcb5d0fbeb95905fc3d", roomId, userId, userName);
    
    // Create Zego UI kit prebuilt instance and join room
    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zp.joinRoom({
        container: document.querySelector("#root"),
    });
});
