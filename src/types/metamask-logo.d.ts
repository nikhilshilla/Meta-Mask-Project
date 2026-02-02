declare module "@metamask/logo" {
    interface LogoViewerOptions {
      pxNotRatio?: boolean;
      width?: number;
      height?: number;
      followMouse?: boolean;
      slowDrift?: boolean;
      mouseFollowStrength?: number;
    }
  
    interface LogoViewer {
      container: HTMLDivElement;
      startAnimation: () => void;
      stopAnimation: () => void;
      setFollowMouse: (enabled: boolean) => void;
    }
  
    export default function MetamaskLogo(options?: LogoViewerOptions): LogoViewer;
  }
  