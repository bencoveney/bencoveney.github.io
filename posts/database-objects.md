---
title: "DatabaseObjects"
nuget: https://www.nuget.org/packages/DatabaseObjects/
github: https://github.com/bencoveney/DatabaseObjects
preview: "./database-objects.png"
summary: "Library of utilities and classes for inspecting database schemas."
categories:
  - project
  - c-sharp
  - sql
  - nuget
  - unit-test
---

Database Objects is a library of utility classes for inspecting SQL Server schemas that I built back in 2015. It queries the database's `Information_Schema` tables and compiling the results into class data.

```c#
// Loading a model from the database.
Model model = Model.LoadFromDatabase(ConnectionString);

// Enumerating tables.
foreach (Table table in model.Tables)
{
	Console.WriteLine(table.Name);
	foreach (Column column in table.Columns)
	{
		Console.WriteLine(column.Name);
		Console.WriteLine(column.DataType.DataType);
	}
	foreach (Constraint constraint in table.Constraints)
	{
		Console.WriteLine(constraint.Name);
		Console.WriteLine(constraint.ConstraintType);
	}
}

// Enumerating routines.
foreach (Routine routine in model.Routines)
{
	Console.WriteLine(routine.Name);
	Console.WriteLine(routine.RoutineType);
	foreach (RoutineParameter parameter in routine.Parameters)
	{
		Console.WriteLine(parameter.Name);
		Console.WriteLine(parameter.Mode);
		Console.WriteLine(parameter.DataType.DataType);
	}
}
```

Looking back at code you wrote 8 years ago, it is not surprising to find there's things you would improve if you were to approach the project again. There are no tests available at the moment for starters.

The main thing I notice re-reading my old code is that it does all the database querying up-front. This means that you'll get a long initial load of every piece of metedata even if you don't want to make use of different parts of the model.

Despite its failings, DatabaseObjects has managed to accumulate ~3500 downloads since I originally published it to NuGet.
