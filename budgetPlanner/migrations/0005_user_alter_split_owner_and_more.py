# Generated by Django 4.1.7 on 2023-03-21 13:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('budgetPlanner', '0004_alter_split_owner_alter_splitdistribution_debtor_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gmail', models.CharField(max_length=250)),
                ('first_name', models.CharField(max_length=250)),
                ('last_name', models.CharField(blank=True, max_length=250)),
                ('profile', models.ImageField(default='profile.jfif', upload_to='')),
            ],
        ),
        migrations.AlterField(
            model_name='split',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budgetPlanner.user'),
        ),
        migrations.AlterField(
            model_name='splitdistribution',
            name='debtor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budgetPlanner.user'),
        ),
    ]
