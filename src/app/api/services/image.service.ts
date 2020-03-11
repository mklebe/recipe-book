/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FileUploadDto } from '../models/file-upload-dto';
import { NestImage } from '../models/nest-image';

@Injectable({
  providedIn: 'root',
})
export class ImageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation uploadImage
   */
  static readonly UploadImagePath = '/image/upload/recipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadImage$Response(params: {

  
  /**
   * Recipe image
   */
  body: FileUploadDto
  }): Observable<StrictHttpResponse<NestImage>> {

    const rb = new RequestBuilder(this.rootUrl, ImageService.UploadImagePath, 'post');
    if (params) {


      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NestImage>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadImage(params: {

  
  /**
   * Recipe image
   */
  body: FileUploadDto
  }): Observable<NestImage> {

    return this.uploadImage$Response(params).pipe(
      map((r: StrictHttpResponse<NestImage>) => r.body as NestImage)
    );
  }

}
