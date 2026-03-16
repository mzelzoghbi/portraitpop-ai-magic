const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg font-semibold tracking-tight">PortraitPop</div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="mailto:zaplatform@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PortraitPop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
