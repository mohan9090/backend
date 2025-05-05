from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Set is_staff and is_superuser to True for users with role admin'

    def handle(self, *args, **options):
        admin_users = User.objects.filter(role='admin')
        count = 0
        for user in admin_users:
            if not user.is_staff or not user.is_superuser:
                user.is_staff = True
                user.is_superuser = True
                user.save()
                count += 1
        self.stdout.write(self.style.SUCCESS(f'Successfully updated {count} admin users'))
