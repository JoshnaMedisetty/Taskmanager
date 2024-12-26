import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../helpers/dbConnect';
import Task from '../../../models/Task';

export async function GET() {
  await dbConnect();
  const tasks = await Task.find({});
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const newTask = await Task.create(data);
  return NextResponse.json(newTask);
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); // Fetch task ID from query params
  const updates = await req.json(); // Get updated task data from the request body
  const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true }); // Update task
  if (!updatedTask) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json(updatedTask); // Return the updated task
}


export async function DELETE(req: NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Task deleted successfully' });
}
