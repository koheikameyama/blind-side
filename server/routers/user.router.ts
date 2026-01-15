import { z } from 'zod';
import { router, protectedProcedure } from '../trpc/trpc';

export const userRouter = router({
  // Get current user info
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        clerkId: ctx.auth.userId!,
      },
    });

    return user;
  }),

  // Create or update user
  upsert: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.upsert({
        where: {
          clerkId: ctx.auth.userId!,
        },
        update: {
          email: input.email,
          name: input.name,
        },
        create: {
          clerkId: ctx.auth.userId!,
          email: input.email,
          name: input.name,
        },
      });

      return user;
    }),
});
