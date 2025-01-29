import Link from 'next/link';
import projects from './projects.json';

export default function Index() {
    return (
        <div>
        {projects.map((project, index) => (
            <>
                <div key={project.id} className="w-full flex flex-col justify-between items-start rounded-2xl p-6 transition-all cursor-pointer group hover:bg-[--dark-purple]">
                    <div className="w-full flex justify-between items-center h-[160px]">
                        <div className="flex justify-start items-start h-fit gap-x-4">
                            <p className="text-2xl leading-none group-hover:text-gray-2 text-gray-3 transition-colors">
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <h1 className="khula-regular text-6xl tracking-[calc(3.75rem * 0.03)] group-hover:text-gray-2 transition-all group-hover:ml-2">
                                {project.name}
                            </h1>
                        </div>
                        <p className="text-lg pr-2 group-hover:text-gray-2 group-hover:pr-4 transition-all">
                            {project.iDid.join(' / ')}
                        </p>
                    </div>
                    <div className="mt-4 w-full hidden group-hover:block">
                        <p className="text-lg mb-2">{project.description}</p>
                        <div className="mb-2">
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </div>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            View Project
                        </Link>
                    </div>
                </div>
                <div className="mt-4 border-b border-[#E8EAED] w-full"></div>
            </>
        ))}
        </div>
    )
}