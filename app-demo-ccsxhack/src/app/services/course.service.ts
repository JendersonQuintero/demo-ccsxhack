import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../models/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private nameDbCourses: string = 'course';

  constructor(private firestore: Firestore) {}

  createCourse(course: Course) {
    const courseRef = collection(this.firestore, this.nameDbCourses);
    return addDoc(courseRef, course);
  }

  getCourses(): Observable<Course[]> {
    const courseRef = collection(this.firestore, this.nameDbCourses);
    return collectionData(courseRef, { idField: 'id' }) as Observable<Course[]>;
  }

  deleteCourse(course: Course) {
    const courseRef = doc(this.firestore, `${this.nameDbCourses}/${course.id}`);
    return deleteDoc(courseRef);
  }
}
