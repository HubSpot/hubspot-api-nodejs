import { initObjectOld } from '../../../services/initObjectOld'
import BaseDiscovery from '../../BaseDiscovery'
import type AuthorsDiscovery from './authors/AuthorsDiscovery'
import type BlogPostsDiscovery from './blog_posts/BlogPostsDiscovery'
import type TagsDiscovery from './tags/TagsDiscovery'

export default class BlogsDiscovery extends BaseDiscovery {
  public _authors: AuthorsDiscovery | undefined
  public _blogPosts: BlogPostsDiscovery | undefined
  public _tags: TagsDiscovery | undefined

  /**
   * Getter
   * @returns AuthorsDiscovery
   */
  get authors() {
    if (!this._authors) {
      this._authors = initObjectOld<AuthorsDiscovery>('cms/blogs/authors/AuthorsDiscovery', this.config)
    }

    return this._authors
  }

  /**
   * Getter
   * @returns BlogPostsDiscovery
   */
  get blogPosts() {
    if (!this._blogPosts) {
      this._blogPosts = initObjectOld<BlogPostsDiscovery>('cms/blogs/blog_posts/BlogPostsDiscovery', this.config)
    }

    return this._blogPosts
  }

  /**
   * Getter
   * @returns TagsDiscovery
   */
  get tags() {
    if (!this._tags) {
      this._tags = initObjectOld<TagsDiscovery>('cms/blogs/tags/TagsDiscovery', this.config)
    }

    return this._tags
  }
}
