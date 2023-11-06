import {CardTitle, CardDescription, CardHeader, CardContent, Card} from '~/components/components/ui/card';

export function CardProject() {
  return (
    <Card className='h-screen w-full flex flex-col'>
      <CardHeader className='p-4 bg-gray-200 dark:bg-gray-800'>
        <CardTitle className='text-2xl font-bold text-black dark:text-white'>Project Title</CardTitle>
        <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
          This is a description of the project.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-grow p-4'>
        <img
          alt='Project Image'
          className='object-cover w-full h-full'
          height='500'
          src='/placeholder.svg'
          style={{
            aspectRatio: '500/500',
            objectFit: 'cover',
          }}
          width='500'
        />
      </CardContent>
    </Card>
  );
}
