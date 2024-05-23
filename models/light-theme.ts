import {Theme} from "@xsolla/switch-themes";

export const lightTheme: Theme = {
  "colors": {
    "base": {
      "content": "rgb(24, 23, 28)",
      "surface": "rgb(255, 255, 255)",
      "project": "rgb(61, 70, 245)",
      "phantom": "rgb(65, 57, 96)",
      "path": "rgb(13, 13, 242)",
      "success": "rgb(15, 138, 101)",
      "warning": "rgb(204, 65, 0)",
      "alert": "rgb(204, 0, 78)",
      "neutral": "rgb(65, 57, 96)"
    },
    "core": {
      "background": {
        "primary": "rgb(255, 255, 255)",
        "ghost": "rgba(65, 57, 96, 0.05)",
        "tone": "rgba(72, 69, 84, 0.5)",
        "selection": "rgba(65, 57, 96, 0.1)",
        "hover": "rgba(65, 57, 96, 0.08)",
        "brand": "rgb(207, 216, 252)",
        "success": "rgb(232, 252, 239)",
        "warning": "rgb(255, 245, 230)",
        "alert": "rgb(255, 230, 232)",
        "neutral": "rgb(239, 240, 246)",
        "secondary": "rgb(255, 255, 255)"
      },
      "divider": {
        "divider": "rgba(65, 57, 96, 0.15)"
      },
      "text": {
        "primary": "rgb(24, 23, 28)",
        "secondary": "rgba(24, 23, 28, 0.7)",
        "tertiary": "rgba(24, 23, 28, 0.5)",
        "brand": "rgb(61, 70, 245)",
        "success": "rgb(15, 138, 101)",
        "warning": "rgb(204, 65, 0)",
        "alert": "rgb(153, 0, 66)",
        "neutral": "rgb(65, 57, 96)"
      },
      "link": {
        "link": "rgb(13, 13, 242)",
        "linkHover": "rgba(13, 13, 242, 0.7)",
        "linkMinor": "rgb(110, 123, 247)",
        "linkMinorHover": "rgba(110, 123, 247, 0.7)"
      }
    },
    "control": {
      "primary": {
        "bg": "rgb(61, 70, 245)",
        "bgHover": "rgb(13, 13, 242)",
        "bgPress": "rgb(110, 123, 247)",
        "bgDisabled": "rgb(204, 204, 204)"
      },
      "secondary": {
        "bg": "transparent",
        "bgHover": "rgba(158, 172, 250, 0.2)",
        "bgPress": "rgba(158, 172, 250, 0.5)",
        "border": "rgb(61, 70, 245)",
        "borderHover": "rgb(13, 13, 242)",
        "borderPress": "rgb(13, 13, 242)"
      },
      "default": {
        "bg": "rgb(26, 26, 26)",
        "bgHover": "rgb(13, 13, 13)",
        "bgPress": "rgb(51, 51, 51)"
      },
      "input": {
        "bg": "rgba(65, 57, 96, 0.07)",
        "bgHover": "rgba(65, 57, 96, 0.1)",
        "bgDisabled": "rgba(65, 57, 96, 0.2)",
        "border": "transparent",
        "borderHover": "rgba(65, 57, 96, 0.1)",
        "borderDisabled": "transparent",
        "text": "rgb(24, 23, 28)",
        "textDisabled": "rgba(24, 23, 28, 0.3)",
        "placeholder": "rgba(24, 23, 28, 0.55)"
      },
      "focus": {
        "bg": "rgb(255, 255, 255)",
        "border": "rgb(61, 70, 245)"
      },
      "alert": {
        "bg": "transparent",
        "bgHover": "rgba(255, 102, 138, 0.2)",
        "bgPress": "rgba(255, 102, 138, 0.5)",
        "border": "rgb(204, 0, 78)",
        "borderHover": "rgb(153, 0, 66)",
        "borderPress": "rgb(153, 0, 66)"
      },
      "check": {
        "bg": "rgb(61, 70, 245)",
        "bgHover": "rgb(13, 13, 242)",
        "bgDisabled": "rgba(65, 57, 96, 0.2)"
      },
      "faint": {
        "bg": "rgba(65, 57, 96, 0.15)",
        "bgHover": "rgba(65, 57, 96, 0.2)",
        "border": "transparent",
        "borderHover": "rgba(65, 57, 96, 0.15)"
      },
      "toggle": {
        "bg": "rgba(65, 57, 96, 0.15)",
        "bgHover": "rgba(65, 57, 96, 0.2)"
      },
      "text": {
        "active": "rgb(255, 255, 255)",
        "secondary": "rgb(61, 70, 245)",
        "default": "rgb(255, 255, 255)",
        "primary": "rgb(24, 23, 28)",
        "disabled": "rgba(24, 23, 28, 0.3)",
        "faint": "rgb(255, 255, 255)",
        "alert": "rgb(204, 0, 78)"
      }
    }
  },
  "typo": {
    "fontFamily": "'GraphikLCWebUikit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    "core": {
      "h1": {
        "fontSize": "30px",
        "lineHeight": "36px",
        "fontWeight": 500
      },
      "h2": {
        "fontSize": "24px",
        "lineHeight": "32px",
        "fontWeight": 500
      },
      "h3": {
        "fontSize": "20px",
        "lineHeight": "28px",
        "fontWeight": 500
      },
      "h4": {
        "fontSize": "18px",
        "lineHeight": "25px",
        "fontWeight": 500
      },
      "bodyMd": {
        "fontSize": "14px",
        "lineHeight": "20px"
      },
      "bodyMdAccent": {
        "fontSize": "14px",
        "lineHeight": "20px",
        "fontWeight": 500
      },
      "bodyLgAccent": {
        "fontSize": "16px",
        "lineHeight": "20px",
        "fontWeight": 500
      },
      "paragraph": {
        "fontSize": "14px",
        "lineHeight": "20px"
      },
      "label": {
        "fontSize": "14px",
        "lineHeight": "20px"
      },
      "minor": {
        "fontSize": "12px",
        "lineHeight": "17px"
      }
    },
    "components": {
      "button": {
        "sm": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 500
        },
        "md": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 500
        },
        "lg": {
          "fontSize": "16px",
          "lineHeight": "22px",
          "fontWeight": 500
        }
      },
      "input": {
        "sm": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 400
        },
        "md": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400
        },
        "lg": {
          "fontSize": "16px",
          "lineHeight": "22px",
          "fontWeight": 400
        }
      },
      "tab": {
        "sm": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 500
        },
        "md": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 500
        },
        "lg": {
          "fontSize": "16px",
          "lineHeight": "22px",
          "fontWeight": 500
        }
      },
      "check": {
        "sm": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 400
        },
        "md": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400
        },
        "lg": {
          "fontSize": "16px",
          "lineHeight": "22px",
          "fontWeight": 400
        }
      },
      "heading": {
        "sm": {
          "fontSize": "10px",
          "lineHeight": "14px",
          "fontWeight": 400,
          "textTransform": "uppercase"
        },
        "md": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 400,
          "textTransform": "uppercase"
        },
        "lg": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400,
          "textTransform": "uppercase"
        }
      },
      "label": {
        "sm": {
          "fontSize": "10px",
          "lineHeight": "14px",
          "fontWeight": 400
        },
        "md": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 400
        },
        "lg": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400
        }
      },
      "fieldGroup": {
        "sm": {
          "fontSize": "10px",
          "lineHeight": "14px",
          "fontWeight": 400
        },
        "md": {
          "fontSize": "12px",
          "lineHeight": "17px",
          "fontWeight": 400
        },
        "lg": {
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400
        }
      }
    }
  },
  "misc": {
    "borderWidth": "2px",
    "borderRadius": {
      "input": "8px",
      "button": "8px",
      "buttonIcon": "8px",
      "popup": "8px",
      "checkbox": "4px",
      "tag": "18px"
    },
    "minWidth": {
      "button": "40px"
    },
    "borderRadiusScale": {
      "sm": "4px",
      "md": "8px",
      "lg": "12px",
      "xl": "16px"
    }
  },
  "shadows": {
    "active": "0px 1px 2px rgba(7, 7, 8, 0.2), 0px 1px 3px 1px rgba(7, 7, 8, 0.1)",
    "surface": "0px 1px 2px rgba(7, 7, 8, 0.2), 0px 2px 6px 2px rgba(7, 7, 8, 0.1)",
    "surfaceHover": "0px 4px 8px 3px rgba(7, 7, 8, 0.1), 0px 1px 3px rgba(7, 7, 8, 0.2)",
    "popover": "0px 6px 10px 4px rgba(7, 7, 8, 0.1), 0px 2px 3px rgba(7, 7, 8, 0.2)",
    "modal": "0px 8px 12px 6px rgba(7, 7, 8, 0.1), 0px 4px 4px rgba(7, 7, 8, 0.2)"
  }
}