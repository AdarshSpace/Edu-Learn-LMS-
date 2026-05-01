"use client"
import fileUpload from "@/Components/upload/fileUpload";
import {upload} from "@imagekit/next"


function UploadVideo() {
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return

        try {
          
        // Ask backend for ImageKit auth
        const authRes = await fetch("http://localhost:3000/api/video/auth");
        const data = await authRes.json();
  
  
      console.log('authentication  : ', data, authRes);
      console.log('Public Key : ', process.env.NEXT_PUBLIC_PUBLIC_KEY);
  
        const res = await upload({
          file,
          fileName: file.name,
          publicKey: data.publicKey,
          expire: data.expire,
          token: data.token,
          signature: data.signature,
          onProgress: (event: ProgressEvent) => {
            if (event.lengthComputable) {
              const percent = Math.round(
                (event.loaded / event.total) * 100
              );
            //   onProgress(percent);
            }
          },
        });

        console.log('Uploaded video : ', res);
  
       const uploadRes = await fetch("http://localhost:3000/api/video/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "My Video",
            fileId: res.fileId,
            fileName: res.name,
            fileUrl: res.url,
            fileSize: res.size,
            thumbnailUrl: res.thumbnailUrl
          }),
        });

        const uploadData = await uploadRes.json();
        console.log('Upload response : ', uploadData);

  
        // onsuccess(res);
      } catch (err) {
        console.log("Upload failed:", err);
      } 
    }
    const filePath = "_4321_demo_sample_i-UcPbrSb.mp4";
    function generateVideoEmbedUrl(filePath: string) {
        const imagekitId = "wn1n04z05";
      
        return `https://imagekit.io/player/embed/${imagekitId}/${filePath}/ik-master.m3u8?controls=true&autoplay=false&tr=sr-240_360_480_720_1080_2160`;
      }

  return (
    <div>
      <h1>Upload Video</h1>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />

      <iframe width="560" height="315" src="https://imagekit.io/player/embed/wn1n04z05/_4321_demo_sample_i-UcPbrSb.mp4/ik-master.m3u8?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1777432856092&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwn1n04z05%2F_4321_demo_sample_i-UcPbrSb.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1777432856092&tr=sr-240_360_480_720_1080_2160" title="ImageKit video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
            <iframe width="560" height="315" src="https://ik.imagekit.io/wn1n04z05/1st_scene_3PXR-zsDZ.mp4" title="ImageKit video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
            <iframe width={560} height={315} src={generateVideoEmbedUrl(filePath)} style={{ border: "10px solid #d1fae5"}} title="ImageKit video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>

            
    </div>

  );
}

export default UploadVideo;