import { getTopComments, Comment } from "@/app/lib/youtube-api";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TestimonialCard({
  comment,
  className,
}: {
  comment: Comment;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardContent className="h-full pt-6">
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-10">
          <p className="text-xl font-medium line-clamp-4">{comment.text}</p>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={comment.authorImage} alt={comment.authorName} />
              <AvatarFallback>
                {comment.authorName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <cite className="text-sm font-medium">{comment.authorName}</cite>
              <span className="text-muted-foreground block text-sm">
                Spanish Learner
              </span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default async function Testimonials() {
  const comments = await getTopComments(5);
  if (!comments.length) return null;

  const sortedComments = [...comments].sort(
    (a, b) => b.text.length - a.text.length
  );
  const [featuredComment, ...otherComments] = sortedComments;

  return (
    <section className=" md:py-20 py-10">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-3xl font-medium lg:text-5xl">
            What My Students Say
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied students who have transformed their
            Spanish speaking abilities through my lessons
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <TestimonialCard
            comment={featuredComment}
            className="lg:row-span-2 p-6 bg-rose-50/50 border border-rose-200"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {otherComments.map((comment) => (
              <TestimonialCard
                key={comment.id}
                comment={comment}
                className="bg-rose-50/50 border border-rose-200"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
