export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="fixed-bottom bg-dark text-success text-center">
            Copyright © {year} CaliRig - All rights reserved
        </footer>
      );
}