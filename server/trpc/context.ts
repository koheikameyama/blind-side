import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export async function createContext() {
  const authObject = await auth();

  return {
    auth: authObject,
    prisma,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
