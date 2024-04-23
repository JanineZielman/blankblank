// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Project field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.project[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    project: prismicT.GroupField<Simplify<HomepageDocumentDataProjectItem>>;
}
/**
 * Item in Homepage → Project
 *
 */
export interface HomepageDocumentDataProjectItem {
    /**
     * Title field in *Homepage → Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.project[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Link field in *Homepage → Project*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.project[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Image field in *Homepage → Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.project[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Position field in *Homepage → Project*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.project[].position
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    position: prismicT.SelectField<"left_top" | "middle_top" | "right_top" | "left_bottom" | "middle_bottom" | "right_bottom">;
}
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = TextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Background Color field in *Project*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: project.background_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Slice Zone field in *Project*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: project.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ProjectDocumentDataSlicesSlice>;
}
/**
 * Slice for *Project → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = TextSlice | ImageSlice;
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Name field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Name of your blog (e.g. your name)
     * - **API ID Path**: settings.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Short description of your blog
     * - **API ID Path**: settings.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Footer field in *Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.footer[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    footer: prismicT.GroupField<Simplify<SettingsDocumentDataFooterItem>>;
}
/**
 * Item in Settings → Footer
 *
 */
export interface SettingsDocumentDataFooterItem {
    /**
     * Text field in *Settings → Footer*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.footer[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = HomepageDocument | NavigationDocument | PageDocument | ProjectDocument | SettingsDocument;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Background Color field in *Image → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Fade field in *Image → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: image.primary.fade
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    fade: prismicT.BooleanField;
    /**
     * Fade Direction field in *Image → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.fade_direction
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    fade_direction: prismicT.SelectField<"Top" | "Middle" | "Bottom">;
    /**
     * Columns field in *Image → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.columns
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    columns: prismicT.SelectField<"1" | "2" | "3" | "4">;
}
/**
 * Item in Image → Items
 *
 */
export interface ImageSliceDefaultItem {
    /**
     * Image field in *Image → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"full-height" | "full-width" | "full-screen">;
    /**
     * Size field in *Image → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: image.items[].size
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    size: prismicT.SelectField<"main" | "full-height" | "full-width" | "full-screen">;
    /**
     * Caption field in *Image → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image.items[].caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, Simplify<ImageSliceDefaultItem>>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Background Color field in *Text → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: text.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Fade field in *Text → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: text.primary.fade
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    fade: prismicT.BooleanField;
    /**
     * Fade Direction field in *Text → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: text.primary.fade_direction
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    fade_direction: prismicT.SelectField<"Top" | "Middle" | "Bottom">;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataProjectItem, HomepageDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, ProjectDocumentData, ProjectDocumentDataSlicesSlice, ProjectDocument, SettingsDocumentData, SettingsDocumentDataFooterItem, SettingsDocument, AllDocumentTypes, ImageSliceDefaultPrimary, ImageSliceDefaultItem, ImageSliceDefault, ImageSliceVariation, ImageSlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceVariation, TextSlice };
    }
}
