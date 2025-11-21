import { useEffect } from 'react';

export function useCopyProtection() {
  useEffect(() => {
    // Prevent text selection
    const preventSelect = (e: Event) => {
      e.preventDefault();
    };

    // Prevent right-click context menu
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent copy
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent cut
    const preventCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent paste (optional)
    const preventPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent text selection with keyboard shortcuts (Ctrl+A)
    const preventSelectAll = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('selectstart', preventSelect);
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCut);
    document.addEventListener('paste', preventPaste);
    document.addEventListener('keydown', preventSelectAll);

    // Disable user select in CSS
    document.documentElement.style.userSelect = 'none';
    (document.documentElement as any).style.webkitUserSelect = 'none';
    (document.documentElement as any).style.msUserSelect = 'none';
    (document.documentElement as any).style.mozUserSelect = 'none';

    // Disable dragging
    document.addEventListener('dragstart', preventSelect);

    return () => {
      // Cleanup: Remove event listeners
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCut);
      document.removeEventListener('paste', preventPaste);
      document.removeEventListener('keydown', preventSelectAll);
      document.removeEventListener('dragstart', preventSelect);

      // Reset user select
      document.documentElement.style.userSelect = '';
      (document.documentElement as any).style.webkitUserSelect = '';
      (document.documentElement as any).style.msUserSelect = '';
      (document.documentElement as any).style.mozUserSelect = '';
    };
  }, []);
}
