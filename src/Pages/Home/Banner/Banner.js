import React from 'react';

const Banner = () => {
    return (
		<div className="p-6 bg-[#b1f0e2] py-12 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Sale & Buy !! products easily
				
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
						<span className="font-bold text-lg">love Bangladesh</span>
			</div>
			
		</div>
	</div>
</div>
    );
};

export default Banner;