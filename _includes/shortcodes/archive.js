/**
 * @file Defines a shortcode for displaying an archive of content
 * @author Brian Hinton <ask@mrbrianhinton.com]>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a `section` of `article`s
 * @module _includes/shortcodes/archive
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default (eleventyConfig) =>
  /**
   * A section of articles
   * @method
   * @name archive
   * @param {Object} data 11ty’s data object
   * @param {Array} arr The 11ty content objects to list
   * @return {String} The rendered shortcode
   * @example `${this.archive(data, data.pagination.items)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode("archive", function (data, arr) {
    var l10n = data.site[data.locale];
    return `<section class="grid gap">
    ${arr
      .map(
        (item) =>
          `<article>
        <time>${this.pageDate(item.data)}</time>
        <h2>
          <a href="${item.data.page.url}">${item.data.title}</a>
        </h2>
        <p>${item.data.description}</p>
      </article>`
      )
      .join("")}
    </section>`;
  });
