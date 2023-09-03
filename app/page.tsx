'use client'

import { useState } from 'react'
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Home() {
return (
<section className="flex flex-col items-center justify-center">
	<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
			<Image isZoomed width={400} alt="NextUI hero Image"
				src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
		</div>
		<div
			className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
			</h1>
			<p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra
				air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
				chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
			<div className="flex justify-center">
				<button
					className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
				<button
					className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
			</div>
		</div>

	</div>
</section>
);
}