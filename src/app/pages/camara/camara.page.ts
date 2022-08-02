import { Component, OnInit } from '@angular/core';
// import { Camera,  CameraResultType } from '@capacitor/camera';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.takePicture();
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // console.log(imageUrl);
    
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  };

}
