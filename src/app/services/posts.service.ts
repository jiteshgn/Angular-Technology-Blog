import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map } from 'rxjs';

import * as firebase from 'firebase/firestore';
import { increment } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }

  loadFeatured(){
    return this.afs.collection('posts',ref=>ref.where('isFeatured','==',true).limit(4)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }
  loadLatest(){
    return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }
  loadCategoryPosts(categoryId:any){
    return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',categoryId)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }
  loadOnePost(postId:any){
    return this.afs.doc(`posts/${postId}`).valueChanges();

  }
  loadSimilar(catId:any){
    return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',catId)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }
  countViews(postId:any){
    const postData:any = this.afs.doc(`posts/${postId}`);
    return postData.ref.get().then((data:any) => {
      let views = data.data().views
      postData.update({
        views: ++views
      });
    });
    // const viewsCount={
    //   views:firebase.default.firestore.FieldValue.increment(1);
    // }
  //   this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=>{
  //   console.log('Views Count Updated ...!');
  // })
  // this.afs.doc(`posts/${postId}`).update({votes: ++choice.votes});
}
}
