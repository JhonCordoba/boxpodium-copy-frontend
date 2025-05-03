import Button from "@mui/material/Button";

export interface NavbarProps {
  welcomeMessage: string;
}

export function Navbar({ welcomeMessage }: NavbarProps) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{welcomeMessage}</h1>
    </>
  );
}
