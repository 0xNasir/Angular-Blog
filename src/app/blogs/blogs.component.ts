import { Component, OnInit } from '@angular/core';
import { Blogs } from '../blogs';
import { Blog } from '../blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
	blog_title = 'Blog';
	blog_list=Blogs;
  selectedBlog:Blog;
  onSelect(singleBlog: Blog): void {
  this.selectedBlog = singleBlog;
}
  constructor() { }

  ngOnInit() {
  }

}
