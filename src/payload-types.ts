/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    tenants: Tenant;
    pages: Page;
    author: Author;
    donors: Donor;
    'guiding-principles': GuidingPrinciple;
    impact: Impact;
    offices: Office;
    members: Member;
    partners: Partner;
    projects: Project;
    posts: Post;
    tag: Tag;
    teams: Team;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'settings-site': SettingsSite;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  roles: ('super-admin' | 'user')[];
  tenants?:
    | {
        tenant: string | Tenant;
        roles: ('admin' | 'user')[];
        id?: string | null;
      }[]
    | null;
  lastLoggedInTenant?: (string | null) | Tenant;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants".
 */
export interface Tenant {
  id: string;
  name: string;
  domains?:
    | {
        domain: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug?: string | null;
  blocks?:
    | (
        | {
            embedCode: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'contact-form';
          }
        | {
            title: string;
            subtitle?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'error';
          }
        | {
            defaultTag: string | Tag;
            projects: (string | Project)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'featured-work';
          }
        | {
            title: string;
            primaryTag?: string | null;
            featured: {
              story: string | Post;
              action?: string | null;
            };
            stories: {
              items: (string | Post)[];
              action: {
                label: string;
                linkType?: ('custom' | 'internal') | null;
                doc?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                href: string;
                newTab?: boolean | null;
              };
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'featured-stories';
          }
        | {
            title: string;
            subtitle: string;
            action: {
              label: string;
              linkType?: ('custom' | 'internal') | null;
              doc?: {
                relationTo: 'pages';
                value: string | Page;
              } | null;
              url?: string | null;
              href: string;
              newTab?: boolean | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'get-in-touch';
          }
        | {
            impacts?: (string | Impact)[] | null;
            action: {
              label: string;
              linkType?: ('custom' | 'internal') | null;
              doc?: {
                relationTo: 'pages';
                value: string | Page;
              } | null;
              url?: string | null;
              href: string;
              newTab?: boolean | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'get-involved';
          }
        | {
            title: string;
            list?: (string | GuidingPrinciple)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-guiding-principles';
          }
        | {
            title: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            messages?:
              | {
                  message?: string | null;
                  id?: string | null;
                }[]
              | null;
            subtitle: string;
            image: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
        | {
            title: string;
            subtitle: string;
            action: {
              label: string;
              linkType?: ('custom' | 'internal') | null;
              doc?: {
                relationTo: 'pages';
                value: string | Page;
              } | null;
              url?: string | null;
              href: string;
              newTab?: boolean | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'join-our-slack';
          }
        | {
            title: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            action: {
              label: string;
              linkType?: ('custom' | 'internal') | null;
              doc?: {
                relationTo: 'pages';
                value: string | Page;
              } | null;
              url?: string | null;
              href: string;
              newTab?: boolean | null;
            };
            image: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'meet-our-team';
          }
        | {
            title: string;
            subtitle: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'page-header';
          }
        | {
            primaryTag: 'stories' | 'opportunities';
            stories?: {
              featured?: (string | null) | Post;
              title: string;
            };
            labels: {
              search: string;
              readMore: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'post-list';
          }
        | {
            title: string;
            subtitle: string;
            image: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'custom-page-header';
          }
        | {
            content: (
              | {
                  richTextBlockFields: {
                    content: {
                      root: {
                        type: string;
                        children: {
                          type: string;
                          version: number;
                          [k: string]: unknown;
                        }[];
                        direction: ('ltr' | 'rtl') | null;
                        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                        indent: number;
                        version: number;
                      };
                      [k: string]: unknown;
                    };
                  };
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'richText';
                }
              | {
                  mediaBlockFields: {
                    image: string | Media;
                  };
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'mediaBlock';
                }
              | {
                  embedBlockFields?: {
                    embedType?: ('url' | 'code') | null;
                    url?: string | null;
                    caption?: string | null;
                    code?: string | null;
                  };
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'external-embed';
                }
            )[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'longform';
          }
        | {
            title: string;
            offices: (string | Office)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-offices';
          }
        | {
            title: string;
            impacts?: (string | Impact)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-impact';
          }
        | {
            title: string;
            subtitle: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-mission';
          }
        | {
            title: string;
            partners?: (string | Partner)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-partners';
          }
        | {
            title: string;
            fields?: ('team' | 'country')[] | null;
            labels: {
              projects: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-team';
          }
        | {
            title: string;
            labels: {
              description: string;
              details: string;
              team: string;
              projects: string;
              partners: string;
              donors: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'our-work';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface Tag {
  id: string;
  name: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  name: string;
  icon: string | Media;
  title: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  subtitle: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  tagLine: string;
  tag: string | Tag;
  externalLink: {
    label: string;
    linkType?: ('custom' | 'internal') | null;
    doc?: {
      relationTo: 'pages';
      value: string | Page;
    } | null;
    url?: string | null;
    href: string;
    newTab?: boolean | null;
  };
  thumbnail: string | Media;
  badges?:
    | {
        name: string;
        date: string;
        id?: string | null;
      }[]
    | null;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        type: 'source' | 'data';
        label: string;
        linkType?: ('custom' | 'internal') | null;
        doc?: {
          relationTo: 'pages';
          value: string | Page;
        } | null;
        url?: string | null;
        href: string;
        id?: string | null;
      }[]
    | null;
  partners: (string | Partner)[];
  donors: (string | Donor)[];
  team: (string | Member)[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partners".
 */
export interface Partner {
  id: string;
  name: string;
  slug?: string | null;
  logo: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  connect?:
    | {
        platform: 'Facebook' | 'Twitter' | 'Instagram' | 'Linkedin' | 'Github' | 'Slack';
        url: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "donors".
 */
export interface Donor {
  id: string;
  name: string;
  slug?: string | null;
  logo: string | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "members".
 */
export interface Member {
  id: string;
  image: string | Media;
  name: string;
  title: string;
  slug?: string | null;
  country?:
    | (
        | 'AFG'
        | 'ALA'
        | 'ALB'
        | 'DZA'
        | 'ASM'
        | 'AND'
        | 'AGO'
        | 'AIA'
        | 'ATA'
        | 'ATG'
        | 'ARG'
        | 'ARM'
        | 'ABW'
        | 'AUS'
        | 'AUT'
        | 'AZE'
        | 'BHS'
        | 'BHR'
        | 'BGD'
        | 'BRB'
        | 'BLR'
        | 'BEL'
        | 'BLZ'
        | 'BEN'
        | 'BMU'
        | 'BTN'
        | 'BOL'
        | 'BES'
        | 'BIH'
        | 'BWA'
        | 'BVT'
        | 'BRA'
        | 'IOT'
        | 'BRN'
        | 'BGR'
        | 'BFA'
        | 'BDI'
        | 'CPV'
        | 'KHM'
        | 'CMR'
        | 'CAN'
        | 'CYM'
        | 'CAF'
        | 'TCD'
        | 'CHL'
        | 'CHN'
        | 'CXR'
        | 'CCK'
        | 'COL'
        | 'COM'
        | 'COG'
        | 'COD'
        | 'COK'
        | 'CRI'
        | 'CIV'
        | 'HRV'
        | 'CUB'
        | 'CUW'
        | 'CYP'
        | 'CZE'
        | 'DNK'
        | 'DJI'
        | 'DMA'
        | 'DOM'
        | 'ECU'
        | 'EGY'
        | 'SLV'
        | 'GNQ'
        | 'ERI'
        | 'EST'
        | 'SWZ'
        | 'ETH'
        | 'FLK'
        | 'FRO'
        | 'FJI'
        | 'FIN'
        | 'FRA'
        | 'GUF'
        | 'PYF'
        | 'ATF'
        | 'GAB'
        | 'GMB'
        | 'GEO'
        | 'DEU'
        | 'GHA'
        | 'GIB'
        | 'GRC'
        | 'GRL'
        | 'GRD'
        | 'GLP'
        | 'GUM'
        | 'GTM'
        | 'GGY'
        | 'GIN'
        | 'GNB'
        | 'GUY'
        | 'HTI'
        | 'HMD'
        | 'VAT'
        | 'HND'
        | 'HKG'
        | 'HUN'
        | 'ISL'
        | 'IND'
        | 'IDN'
        | 'IRN'
        | 'IRQ'
        | 'IRL'
        | 'IMN'
        | 'ISR'
        | 'ITA'
        | 'JAM'
        | 'JPN'
        | 'JEY'
        | 'JOR'
        | 'KAZ'
        | 'KEN'
        | 'KIR'
        | 'PRK'
        | 'KOR'
        | 'KWT'
        | 'KGZ'
        | 'LAO'
        | 'LVA'
        | 'LBN'
        | 'LSO'
        | 'LBR'
        | 'LBY'
        | 'LIE'
        | 'LTU'
        | 'LUX'
        | 'MAC'
        | 'MDG'
        | 'MWI'
        | 'MYS'
        | 'MDV'
        | 'MLI'
        | 'MLT'
        | 'MHL'
        | 'MTQ'
        | 'MRT'
        | 'MUS'
        | 'MYT'
        | 'MEX'
        | 'FSM'
        | 'MDA'
        | 'MCO'
        | 'MNG'
        | 'MNE'
        | 'MSR'
        | 'MAR'
        | 'MOZ'
        | 'MMR'
        | 'NAM'
        | 'NRU'
        | 'NPL'
        | 'NLD'
        | 'NCL'
        | 'NZL'
        | 'NIC'
        | 'NER'
        | 'NGA'
        | 'NIU'
        | 'NFK'
        | 'MKD'
        | 'MNP'
        | 'NOR'
        | 'OMN'
        | 'PAK'
        | 'PLW'
        | 'PSE'
        | 'PAN'
        | 'PNG'
        | 'PRY'
        | 'PER'
        | 'PHL'
        | 'PCN'
        | 'POL'
        | 'PRT'
        | 'PRI'
        | 'QAT'
        | 'REU'
        | 'ROU'
        | 'RUS'
        | 'RWA'
        | 'BLM'
        | 'SHN'
        | 'KNA'
        | 'LCA'
        | 'MAF'
        | 'SPM'
        | 'VCT'
        | 'WSM'
        | 'SMR'
        | 'STP'
        | 'SAU'
        | 'SEN'
        | 'SRB'
        | 'SYC'
        | 'SLE'
        | 'SGP'
        | 'SXM'
        | 'SVK'
        | 'SVN'
        | 'SLB'
        | 'SOM'
        | 'ZAF'
        | 'SGS'
        | 'SSD'
        | 'ESP'
        | 'LKA'
        | 'SDN'
        | 'SUR'
        | 'SJM'
        | 'SWE'
        | 'CHE'
        | 'SYR'
        | 'TWN'
        | 'TJK'
        | 'TZA'
        | 'THA'
        | 'TLS'
        | 'TGO'
        | 'TKL'
        | 'TON'
        | 'TTO'
        | 'TUN'
        | 'TUR'
        | 'TKM'
        | 'TCA'
        | 'TUV'
        | 'UGA'
        | 'UKR'
        | 'ARE'
        | 'GBR'
        | 'USA'
        | 'UMI'
        | 'URY'
        | 'UZB'
        | 'VUT'
        | 'VEN'
        | 'VNM'
        | 'VGB'
        | 'VIR'
        | 'WLF'
        | 'ESH'
        | 'YEM'
        | 'ZMB'
        | 'ZWE'
      )
    | null;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  connect?:
    | {
        platform: 'Facebook' | 'Twitter' | 'Instagram' | 'Linkedin' | 'Github' | 'Slack';
        url: string;
        id?: string | null;
      }[]
    | null;
  team: string | Team;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams".
 */
export interface Team {
  id: string;
  name: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  coverImage: string | Media;
  content: (
    | {
        richTextBlockFields: {
          content: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          };
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'richText';
      }
    | {
        mediaBlockFields: {
          image: string | Media;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        embedBlockFields?: {
          embedType?: ('url' | 'code') | null;
          url?: string | null;
          caption?: string | null;
          code?: string | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'external-embed';
      }
  )[];
  slug?: string | null;
  publishedOn: string;
  tags: (string | Tag)[];
  authors?: (string | Author)[] | null;
  excerpt: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "author".
 */
export interface Author {
  id: string;
  fullName: string;
  bio?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "impact".
 */
export interface Impact {
  id: string;
  title: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  value: string;
  icon: string | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "guiding-principles".
 */
export interface GuidingPrinciple {
  id: string;
  title: string;
  slug?: string | null;
  icon: string | Media;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "offices".
 */
export interface Office {
  id: string;
  city: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  location: [number, number];
  addressLine1?: string | null;
  addressLine2?: string | null;
  zipCode?: string | null;
  country?:
    | (
        | 'AFG'
        | 'ALA'
        | 'ALB'
        | 'DZA'
        | 'ASM'
        | 'AND'
        | 'AGO'
        | 'AIA'
        | 'ATA'
        | 'ATG'
        | 'ARG'
        | 'ARM'
        | 'ABW'
        | 'AUS'
        | 'AUT'
        | 'AZE'
        | 'BHS'
        | 'BHR'
        | 'BGD'
        | 'BRB'
        | 'BLR'
        | 'BEL'
        | 'BLZ'
        | 'BEN'
        | 'BMU'
        | 'BTN'
        | 'BOL'
        | 'BES'
        | 'BIH'
        | 'BWA'
        | 'BVT'
        | 'BRA'
        | 'IOT'
        | 'BRN'
        | 'BGR'
        | 'BFA'
        | 'BDI'
        | 'CPV'
        | 'KHM'
        | 'CMR'
        | 'CAN'
        | 'CYM'
        | 'CAF'
        | 'TCD'
        | 'CHL'
        | 'CHN'
        | 'CXR'
        | 'CCK'
        | 'COL'
        | 'COM'
        | 'COG'
        | 'COD'
        | 'COK'
        | 'CRI'
        | 'CIV'
        | 'HRV'
        | 'CUB'
        | 'CUW'
        | 'CYP'
        | 'CZE'
        | 'DNK'
        | 'DJI'
        | 'DMA'
        | 'DOM'
        | 'ECU'
        | 'EGY'
        | 'SLV'
        | 'GNQ'
        | 'ERI'
        | 'EST'
        | 'SWZ'
        | 'ETH'
        | 'FLK'
        | 'FRO'
        | 'FJI'
        | 'FIN'
        | 'FRA'
        | 'GUF'
        | 'PYF'
        | 'ATF'
        | 'GAB'
        | 'GMB'
        | 'GEO'
        | 'DEU'
        | 'GHA'
        | 'GIB'
        | 'GRC'
        | 'GRL'
        | 'GRD'
        | 'GLP'
        | 'GUM'
        | 'GTM'
        | 'GGY'
        | 'GIN'
        | 'GNB'
        | 'GUY'
        | 'HTI'
        | 'HMD'
        | 'VAT'
        | 'HND'
        | 'HKG'
        | 'HUN'
        | 'ISL'
        | 'IND'
        | 'IDN'
        | 'IRN'
        | 'IRQ'
        | 'IRL'
        | 'IMN'
        | 'ISR'
        | 'ITA'
        | 'JAM'
        | 'JPN'
        | 'JEY'
        | 'JOR'
        | 'KAZ'
        | 'KEN'
        | 'KIR'
        | 'PRK'
        | 'KOR'
        | 'KWT'
        | 'KGZ'
        | 'LAO'
        | 'LVA'
        | 'LBN'
        | 'LSO'
        | 'LBR'
        | 'LBY'
        | 'LIE'
        | 'LTU'
        | 'LUX'
        | 'MAC'
        | 'MDG'
        | 'MWI'
        | 'MYS'
        | 'MDV'
        | 'MLI'
        | 'MLT'
        | 'MHL'
        | 'MTQ'
        | 'MRT'
        | 'MUS'
        | 'MYT'
        | 'MEX'
        | 'FSM'
        | 'MDA'
        | 'MCO'
        | 'MNG'
        | 'MNE'
        | 'MSR'
        | 'MAR'
        | 'MOZ'
        | 'MMR'
        | 'NAM'
        | 'NRU'
        | 'NPL'
        | 'NLD'
        | 'NCL'
        | 'NZL'
        | 'NIC'
        | 'NER'
        | 'NGA'
        | 'NIU'
        | 'NFK'
        | 'MKD'
        | 'MNP'
        | 'NOR'
        | 'OMN'
        | 'PAK'
        | 'PLW'
        | 'PSE'
        | 'PAN'
        | 'PNG'
        | 'PRY'
        | 'PER'
        | 'PHL'
        | 'PCN'
        | 'POL'
        | 'PRT'
        | 'PRI'
        | 'QAT'
        | 'REU'
        | 'ROU'
        | 'RUS'
        | 'RWA'
        | 'BLM'
        | 'SHN'
        | 'KNA'
        | 'LCA'
        | 'MAF'
        | 'SPM'
        | 'VCT'
        | 'WSM'
        | 'SMR'
        | 'STP'
        | 'SAU'
        | 'SEN'
        | 'SRB'
        | 'SYC'
        | 'SLE'
        | 'SGP'
        | 'SXM'
        | 'SVK'
        | 'SVN'
        | 'SLB'
        | 'SOM'
        | 'ZAF'
        | 'SGS'
        | 'SSD'
        | 'ESP'
        | 'LKA'
        | 'SDN'
        | 'SUR'
        | 'SJM'
        | 'SWE'
        | 'CHE'
        | 'SYR'
        | 'TWN'
        | 'TJK'
        | 'TZA'
        | 'THA'
        | 'TLS'
        | 'TGO'
        | 'TKL'
        | 'TON'
        | 'TTO'
        | 'TUN'
        | 'TUR'
        | 'TKM'
        | 'TCA'
        | 'TUV'
        | 'UGA'
        | 'UKR'
        | 'ARE'
        | 'GBR'
        | 'USA'
        | 'UMI'
        | 'URY'
        | 'UZB'
        | 'VUT'
        | 'VEN'
        | 'VNM'
        | 'VGB'
        | 'VIR'
        | 'WLF'
        | 'ESH'
        | 'YEM'
        | 'ZMB'
        | 'ZWE'
      )
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings-site".
 */
export interface SettingsSite {
  id: string;
  title: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  primaryLogo: string | Media;
  secondaryLogo?: string | Media | null;
  primaryNavigation?: {
    menus?:
      | {
          label: string;
          linkType?: ('custom' | 'internal') | null;
          doc?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          href: string;
          id?: string | null;
        }[]
      | null;
    connect?: ('Facebook' | 'Twitter' | 'Instagram' | 'Linkedin' | 'Github' | 'Slack') | null;
  };
  secondaryNavigation?: {
    menus?:
      | {
          label: string;
          linkType?: ('custom' | 'internal') | null;
          doc?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          href: string;
          id?: string | null;
        }[]
      | null;
  };
  connect: {
    title: string;
    links?:
      | {
          platform: 'Facebook' | 'Twitter' | 'Instagram' | 'Linkedin' | 'Github' | 'Slack';
          url: string;
          id?: string | null;
        }[]
      | null;
  };
  newsletter: {
    title: string;
    embedCode: string;
  };
  initiative: {
    title: string;
    description: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
    partners?:
      | {
          name: string;
          logo: string | Media;
          label: string;
          linkType?: ('custom' | 'internal') | null;
          doc?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          href: string;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}