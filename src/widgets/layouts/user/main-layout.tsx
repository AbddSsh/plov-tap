import { type PropsWithChildren } from "react";

import { Footer, Header } from "./ui";

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="bg-background text-foreground min-h-screen max_width">
			<Header />
			<div className="py-6">{children}</div>
			<Footer />
		</div>
	);
};
